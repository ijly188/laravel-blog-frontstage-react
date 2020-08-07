<?php

namespace App\Http\Middleware\Api;

use Closure;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

class TokenAuthMiddleware extends BaseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        try {
            JWTAuth::parseToken()->authenticate();
            return $next($request);
        } catch (TokenExpiredException $e) {
            try {
                $refreshed = JWTAuth::parseToken()->refresh();
                JWTAuth::setToken($refreshed)->toUser();
                $request->headers->set('Authorization', 'Bearer ' . $refreshed);
            } catch (JWTException $e) {
                return response()->json([
                    'success' => false,
                    'message' => $e->getMessage(),
                    'data' => ''
                ], 401);
            }
        } catch (JWTException $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
                'data' => ''
            ], 401);
        }
        return $this->setAuthenticationHeader($next($request), $refreshed);
    }
}

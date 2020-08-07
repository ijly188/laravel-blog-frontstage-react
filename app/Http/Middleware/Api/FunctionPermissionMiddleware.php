<?php

namespace App\Http\Middleware\Api;

use Closure;
use JWTAuth;
use App\Entities\Operation;

class FunctionPermissionMiddleware
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
        //取得要執行的apiURL
        $userOperations = json_decode(JWTAuth::user()->functions, true);
        $apiUrl = trim($request->path(), 'api/');
        $findString = strpos($apiUrl, '/');
        if ($findString) {
            $apiUrl = substr($apiUrl, 0, $findString);
        }
        $findApiUrl = Operation::where('api_url', $apiUrl)
                                ->where('is_active', true)
                                ->first();
        if ($findApiUrl) {
            //判斷使用者是否有權限可使用這個功能
            if (in_array($findApiUrl->id, $userOperations)) {
                return $next($request);
            }
        } else {
            return response()->json([
                'success' => false,
                'message' => 'You do not have this Permossion.',
                'data' => ''
            ], 403);
        }
    }
}

<?php

namespace App\Http\Middleware\Api;

use Closure;
use JWTAuth;

class GroupPermissionMiddleware
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
        if (JWTAuth::user()->group != 'ParentCompanyManager'
            && JWTAuth::user()->group != 'ParentCompanyMarketing'
            && JWTAuth::user()->group != '7teaBrand'
            && JWTAuth::user()->group != '7teaCustomerServiceAllStores'
            && JWTAuth::user()->group != '7teaCustomerServiceSomeStore'
            && JWTAuth::user()->group != '7teaStoreManager'
            && JWTAuth::user()->group != '7teaStoreClerk'
            && JWTAuth::user()->group != '7teaStoreSupervise'
            && JWTAuth::user()->group != '7teaHumanResource'
            && JWTAuth::user()->group != 'Root'
        ) {
            return response()->json([
                'success' => false,
                'message' => 'You are not in any group.',
                'data' => ''
            ], 403);
        }

        return $next($request);
    }
}

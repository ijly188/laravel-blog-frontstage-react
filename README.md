# Laravel-blog & Restful APIs

建立laravel-blog & Restful APIs，透過 laravel 7 框架開發

## Getting Started
```
git clone https://github.com/ijly188/laravel-blog.git
```

```
composer install
```

```
cp .env.example .env
```

```
php artisan key:generate
```

```
composer dump-autoload
```

```
php artisan cache:clear
```

```
php artisan route:clear
```

```
php artisan config:clear
```

```
php artisan view:clear
```

```
php artisan db:seed
```

### 設定 .env 資訊

依據 local 系統配置 進行設置

```
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:6SYshYY5VNL7S4brox+FWQJfy+mm+4r5qXcDvodVOYc=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=null
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

JWT_SECRET=
JWT_TTL=
```

### 需要注意的Operation
開api要注意的是在OperationSeeder裡面有沒有建立對應的route
如果有route沒有權限的狀況有可能就是這裡的seeder沒有改好

### 設定前台或者後台
找到 app\config\auth 這隻檔案以後，大約在70行左右會看到以下的code
```
    'providers' => [
        'users' => [
            'driver' => 'eloquent',
            // 驗證使用後台系統使用者
            'model' => App\Entities\SystemUser::class,
            // 驗證使用前台一般使用者
            // 'model' => App\Entities\Member::class,
        ],

        // 'users' => [
        //     'driver' => 'database',
        //     'table' => 'users',
        // ],
    ],
```
在這邊做切換可以設定驗證的資料庫用的是systemuser還是member

前台會用 class component 去寫
後台會用 function component 去寫

前台會盡量試著去寫測試

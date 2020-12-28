<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- csrf-->
      <meta name="csrf-token" content="{{ csrf_token() }}">
      <title>laravel blog frontstage react</title>
      <!-- Fonts -->
      <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
      <link rel="stylesheet" href="{{ asset('helpers/icomoon/style.css') }}">
      <link rel="stylesheet" href="{{ asset('css/app.css') }}">
   </head>
   <body>
      <div id="app"></div>
      <script src="/js/manifest.js"></script>
      <script src="/js/vendor.js"></script>
      <script src="/js/app.js"></script>
   </body>
</html>
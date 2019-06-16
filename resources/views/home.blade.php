@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Todo List ログイン確認画面</div>
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    ログイン成功！
                </div>
                <a class="card-body" href="{{ url('/') }}">
                    Move to Todo Lists
                </a>
            </div>
        </div>
    </div>
</div>
@endsection

<?php

namespace App\Providers;

use App\Models\Message;
use App\Models\Room;
use App\Models\UserRoom;
use App\Observers\RoomMessageObserver;
use App\Observers\RoomObserver;
use App\Observers\UserRoomObserver;
use App\Policies\RoomPolicy;
use App\Policies\UserRoomPolicy;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Gate::policy(Room::class, RoomPolicy::class);
        Gate::policy(UserRoom::class, UserRoomPolicy::class);

        UserRoom::observe(UserRoomObserver::class);
        Message::observe(RoomMessageObserver::class);
        Room::observe(RoomObserver::class);
    }
}

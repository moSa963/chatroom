<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\MessageResource;
use App\Models\Message;
use App\Models\Room;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class RoomUserLogController extends Controller
{
    public function index(Request $request, Room $room, $username)
    {
        Gate::authorize("view_messages", $room);

        $user = User::where("username", $username)->firstOrFail();

        $messages = $room->messages()->where("user_id", $user->id)->orderBy('created_at', 'desc')->cursorPaginate(10);

        return MessageResource::collection($messages);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Telegram\Bot\Laravel\Facades\Telegram;

class TelegramController extends Controller
{
    //

    public function updatedActivity()
    {
        $activity = Telegram::getUpdates();

            $text = 'perdon';

            Telegram::sendMessage([
                //'chat_id' => 1575526598,mathi
                'chat_id' => 1575526598,
                'parse_mode' => 'HTML',
                'text' => $text
            ]);



        dd($activity);
    }

    public function mandarmensajeB()
    {
        $activity = Telegram::getUpdates();

        $text = 'aaa';

        Telegram::sendMessage([
            //'chat_id' => 1575526598,mathi
            'chat_id' => 1575526598,
            'parse_mode' => 'HTML',
            'text' => $text
        ]);

        /*Telegram::sendMessage([
            //'chat_id' => 1575526598,mathi
            'chat_id' => 762740185, //lovi
            'parse_mode' => 'HTML',
            'text' => $text
        ]); */

        return 'ok';

    }
}

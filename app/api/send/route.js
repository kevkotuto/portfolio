// app/api/send/route.js
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const response = await axios.post('https://v3.api.termii.com/api/sms/send', reqBody, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.response?.status || 500 }
    );
  }
}
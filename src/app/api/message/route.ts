import { NextRequest, NextResponse } from "next/server";
import fetch from 'node-fetch';

export async function GET(request: NextRequest) {
  try {
    const response = await fetch('http://localhost:8080/api/v1/message/chatlist');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching chat list:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}

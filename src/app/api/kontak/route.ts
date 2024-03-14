


let kontakList: any = [
  { id: 1, kontak: "123456789", name: "John Doe" },
  { id: 2, kontak: "987654321", name: "Jane Doe" },
];
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const json = {
    kontakList,
  };

  return NextResponse.json(json);
}

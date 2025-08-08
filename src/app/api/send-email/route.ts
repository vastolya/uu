import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, phone, message } = await req.json();

    const data = await resend.emails.send({
      from: "w11group@ya.ru <onboarding@resend.dev>",
      to: ["w11group@ya.ru"],
      subject: "Пришла новая заявка с сайта!",
      html: `<h1>Имя: ${name}</h1><h2>Телефон: ${phone}</h2><p>Сообщение: ${message}</p>`,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Ошибка отправки письма:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

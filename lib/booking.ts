export type BookingRequest = {
  duration: "15" | "30";
  fullName: string;
  email: string;
  business: string;
  need: string;
  notes: string;
};

export type BookingResult = { ok: true } | { ok: false; error: string };

/**
 * INTEGRATION POINT — no backend is configured for this build.
 *
 * To wire up a real submission, replace the mock below with a call to your
 * booking/CRM endpoint (e.g. POST /api/booking, a Calendly/Cal.com API, or a
 * CRM webhook). The success state in the modal is only shown when this
 * function resolves with `{ ok: true }`, so a failed request will surface an
 * inline error instead of a false confirmation.
 */
export async function submitBookingRequest(data: BookingRequest): Promise<BookingResult> {
  void data;
  await new Promise((resolve) => setTimeout(resolve, 900));
  return { ok: true };
}

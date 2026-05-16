"use server";
import { revalidatePath } from "next/cache";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: "require",
});
await sql`SET TIME ZONE 'Africa/Lagos'`;

export async function createDispatch(formData: FormData) {
  const driver_id = Number(formData.get("driver_id"));
  const pickup_location = String(formData.get("pickup_location"));
  const destination = String(formData.get("destination"));

  await sql`
    INSERT INTO dispatches (
      driver_id,
      pickup_location,
      destination,
      status,
      priority,
      created_at,
      scheduled_at
    )
    VALUES (
      ${driver_id},
      ${pickup_location},
      ${destination},
      'pending',
      'medium',
      NOW(),
      NOW()
    )
  `;
    revalidatePath("/dashboard");
}
"use server"

export default async function registerAction(formData: FormData) {
  const entries = Array.from(formData.entries());
  const data = Object.fromEntries(entries);
  
  if (!data.username || !data.email || !data.password || !data.confirmPassword) {
    throw new Error("All fields are required.");
  }
}
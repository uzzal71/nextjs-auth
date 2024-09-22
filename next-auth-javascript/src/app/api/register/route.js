import { dbConnect } from "@/lib/mongo";
import { createUser } from "@/queries/users";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();
  // Create a DB Connection
  await dbConnect();
  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  // Form a DB payload
  const newUser = { name, email, password: hashedPassword };
  // Update the DB
  try {
    await createUser(newUser);
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }

  return new NextResponse("User has been create successfully", {
    status: 201,
  });
};

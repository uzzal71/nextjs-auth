import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center m-4">
      <h1 className="text-3xl">Hey, time to Sign In</h1>
      <LoginForm />
    </div>
  );
}

export default function Fallback({error}: {error: Error | null}) {
  console.log(error)
  return (
    <div role="alert"
         className="flex flex-col justify-center items-center h-screen w-screen">
      <div>
        <p className="text-center font-bold">Something went wrong</p>
        <pre className="text-red-500 text-center font-bold">
          {error ? `${error.message}` : `And we don't know what :(`}
        </pre>
      </div>
    </div>
  );
}

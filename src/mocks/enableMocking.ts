async function enableMocking(): Promise<void> {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./browser");
  await worker.start();
}

export default enableMocking;

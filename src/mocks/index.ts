const initMockAPI = async (): Promise<void> => {
  if (typeof window === 'undefined') {
    const { servers } = await import('./servers');
    servers.listen();
  } else {
    const { worker } = await import('./browser');
    worker.start();
  }
};

export default initMockAPI;

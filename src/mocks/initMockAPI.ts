const initMockAPI = async (): Promise<void> => {
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    const { worker } = await import('./browser');
    await worker.start({ onUnhandledRequest: 'bypass' });
  }
};

export default initMockAPI;

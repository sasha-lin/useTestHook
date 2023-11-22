export default function useTestHook (settings = {}) {
  const { message } = settings;
  return {
    message
  };
}
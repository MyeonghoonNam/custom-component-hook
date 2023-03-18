import useLocalStorage from '@hooks/useLocalStorage';

export default {
  title: 'Hooks/useLocaleStorage',
};

export function Default() {
  const [value, setValue] = useLocalStorage('status');
  const handleClick = () => {
    setValue({ key: 'value' });
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Bind Storage
      </button>
      <span>{value && value.key}</span>
    </div>
  );
}

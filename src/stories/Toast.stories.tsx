import Toast from '@components/Toast';

export default {
  title: 'Components/Toast',
};

export function Default() {
  return (
    <button type="button" onClick={() => Toast.show('안내드립니다', 3000)}>
      Show Toast !
    </button>
  );
}

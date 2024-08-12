import { Image } from 'antd-mobile'
import headerImageUrl from '@/assets/images/home/header.png'
import { useNavigate } from 'umi'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <Image src={headerImageUrl} onClick={() => navigate('/instructions')} />
  );
}

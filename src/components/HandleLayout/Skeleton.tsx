import ContentLoader from 'react-content-loader'

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={640}
    height={360}
    viewBox='0 0 640 340'
    backgroundColor='#161616 '
    foregroundColor='#0e0e0f'
  >
    <rect x='50' y='20' rx='16' ry='16' width='64' height='64' />
    <rect x='50' y='92' rx='16' ry='16' width='64' height='64' />
    <rect x='51' y='163' rx='16' ry='16' width='64' height='64' />
    <rect x='50' y='236' rx='16' ry='16' width='64' height='64' />
    <rect x='128' y='20' rx='24' ry='24' width='230' height='278' />
    <rect x='366' y='20' rx='8' ry='8' width='230' height='50' />
    <rect x='366' y='80' rx='8' ry='8' width='135' height='32' />
    <rect x='530' y='80' rx='8' ry='8' width='65' height='32' />
    <rect x='366' y='128' rx='8' ry='8' width='104' height='32' />
    <rect x='496' y='128' rx='8' ry='8' width='100' height='32' />
    <rect x='366' y='170' rx='8' ry='8' width='230' height='24' />
    <rect x='367' y='210' rx='30' ry='30' width='230' height='50' />
    <rect x='371' y='276' rx='8' ry='8' width='56' height='20' />
    <rect x='436' y='276' rx='8' ry='8' width='62' height='20' />
    <rect x='509' y='276' rx='8' ry='8' width='78' height='20' />
  </ContentLoader>
)

export default Skeleton

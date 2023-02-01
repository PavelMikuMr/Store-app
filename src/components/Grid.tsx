import module from '../App.module.scss'

// const Grid = () => {
//   return (
//     <div className='grid min-h-screen grid-cols-1  content-center gap-6 p-6 sm:grid-cols-3 sm:content-between'>
//       <div className='video order-3 h-36'>Free</div>
//       <div className='video order-2 h-36'>Basic</div>
//       <div className='video h-36'>Advance</div>
//     </div>
//   )
// }
// export default Grid
const Grid = () => {
  return (
    <div className='grid grid-cols-1 gap-x-6 gap-y-7 p-8 md:grid-cols-3'>
      <div className='md:col-span-2'>
        <h1 className='text-3xl font-bold'>Intro</h1>
        <p className='mt-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam quam nemo
          officia amet eveniet dolorum molestiae architecto reiciendis ducimus doloribus
          hic ipsum, quos neque blanditiis excepturi unde accusantium ullam.
        </p>
      </div>
      <div className='md grid grid-cols-1 gap-6 sm:grid-cols-2 md:row-span-2 md:grid-cols-1 md:content-start md:gap-0 md:gap-y-6'>
        <div className='rounded-lg bg-slate-100 p-4'>
          <h2>action</h2>
          <ul>
            <li>link 1</li>
            <li>link 2</li>
            <li>link 3</li>
          </ul>
        </div>
        <div className='rounded-lg bg-slate-100 p-4'>
          <h2>Related</h2>
          <ul>
            <li>link 1</li>
            <li>link 2</li>
            <li>link 3</li>
          </ul>
        </div>
      </div>

      <div className='col-span-2'>
        <h2 className='font-bold'>Addition Info</h2>
        <p className='mt-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium, iure
          quod minima minus architecto similique velit natus nihil dolores voluptate
          consectetur placeat optio eos amet dignissimos repellendus mollitia fuga.
        </p>
        <p className='mt-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi hic neque
          optio explicabo, illo dolores tenetur in, accusantium fugit quisquam laboriosam
          quidem accusamus itaque saepe qui dicta. Voluptatem, ipsam quisquam!
        </p>
      </div>
    </div>
  )
}
export default Grid

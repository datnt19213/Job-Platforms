import React from 'react'
import { FlexLayout } from './FlexLayout'
import { Button } from '../ui/button'
import { Facebook, Twitter } from 'lucide-react'

const SharePost = () => {
  return (
    <FlexLayout direction="row" justify="start" align="center" className="gap-[10px] py-[30px] flex-wrap">
      <span className='font-semibold text-base w-fit'>Share this post</span>
      <FlexLayout direction="row" justify="start" align="center" className="gap-[10px]">
        <Button className='bg-blue-share hover:bg-blue-share cursor-pointer' >
          <Facebook size={24} />
          <span className='font-semibold'>Facebook</span>
        </Button>
        <Button className='bg-purple-share hover:bg-purple-share cursor-pointer'>
          <Twitter size={24} />
          <span className='font-semibold'>Twitter</span>
        </Button>
        <Button className='bg-red-share hover:bg-red-share cursor-pointer'>
          <Facebook size={24} />
          <span className='font-semibold'>Pinterest</span>
        </Button>
        </FlexLayout>
    </FlexLayout>
  )
}

export default SharePost
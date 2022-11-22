import type { NextPage } from 'next'
import Head from 'next/head'
import { Button, Card, List, ListInput, Page } from 'konsta/react'
import { config } from '../lib'
import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa'
const Home: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>{config.APPNAME}</title>
      </Head>
      <div className='relative h-screen w-screen flex justify-center items-center'>
        <div className='absolute w-full h-full top-0 bg-gradient-to-br from-teamdao-secondary/15 to-zinc-900/15 '>

        </div>
        <div className='absolute flex flex-col lg:flex-row lg:justify-between items-center gap-3 px-5 md:px-20 lg:px-15 lg:py-5 xl:px-56 xl:py-10 w-full'>
          <div className='w-full flex flex-col gap-2 md:gap-5'>
            <h1 className='font-bold text-4xl text-zinc-200'>Buy crypto in a matter of seconds</h1>
            <div className='font- text-zinc-300'>
              Buy ETH and 99+ cryptocurrencies
              <br className='hidden xl:block' />
              using your credit or debit card.
            </div>
            <div className='flex gap-4'>
              <Image
                alt='mastercard'
                width={50}
                height={50}
                src={'/assets/icons/mastercard.png'}
                className="object-contain" />
              <Image
                alt='visa'
                width={50}
                height={50}
                src={'/assets/icons/visa.png'}
                className="object-contain" />
            </div>
          </div>
          <div className=' w-full'>
            <Card
              colors={{
                bgMaterial: 'bg-md-light-surface-1 dark:bg-zinc-900'
              }}
              className='w-full lg:w-[400px]'
              margin='m-0'
              raised>
              <div className='flex flex-col gap-3 p-4'>
                <div className='text-2xl font-bold mb-5'>Buy Crypto</div>
                <div className='flex flex-col gap-3 border dark:border-zinc-700 rounded-md py-3 px-4 transition-all'>
                  <span className='text-zinc-700 dark:text-zinc-400  text-base font-normal'>Spend</span>
                  <div className='flex gap-2'>
                    <input
                      onBlur={(e) => e.currentTarget.parentElement?.parentElement?.classList.remove('field-active')}
                      onFocus={(e) => e.currentTarget.parentElement?.parentElement?.classList.add('field-active')}
                      className='w-full bg-transparent outline-none transition-all font-semibold text-xl dark:text-zinc-300'
                      placeholder='1 - 1000' />
                    <Button
                      small
                      rounded
                      tonal
                      className='!w-auto k-color-brand-teamdao-primary'>
                      <div className='flex items-center justify-center gap-2 px-2'>
                        USD
                        <FaChevronRight className='mt-0.5' size={'0.75rem'} />
                      </div>
                    </Button>
                  </div>
                </div>
                <div className='mt-2 flex flex-col border dark:border-zinc-700  gap-3 rounded-md py-3 px-4 transition-all'>
                  <span className='text-zinc-700 dark:text-zinc-400 text-base font-normal'>Receive</span>
                  <div className='flex gap-2'>
                    <input
                      onBlur={(e) => e.currentTarget.parentElement?.parentElement?.classList.remove('field-active')}
                      onFocus={(e) => e.currentTarget.parentElement?.parentElement?.classList.add('field-active')}
                      className='w-full bg-transparent outline-none transition-all font-semibold text-xl dark:text-zinc-300'
                      placeholder='1 - 1000' />
                    <Button
                      small
                      rounded
                      tonal
                      className='!w-auto k-color-brand-teamdao-primary'>
                      <div className='flex items-center justify-center gap-2 px-2'>
                        ETH
                        <FaChevronRight className='mt-0.5' size={'0.75rem'} />
                      </div>
                    </Button>
                  </div>
                </div>
                <Button
                  className='mt-8 k-color-brand-teamdao-primary'>Buy $TEAM</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Home

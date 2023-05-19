import React from 'react'
import Carosel from './Carosel'

import 'swiper/css';
import Card from './card/Card';

const Homepage = () => {
  return (
    <div className="bg-amazonclone-background">
        <div className='min-w-[1000px] max-w-[1200px] m-auto'>
            <Carosel />
            <div className="grid grid-cols-3 xl:grid-cols-4 ">
                <Card 
                title={'anh se la nguoi dua em den'} 
                image={'https://thumb.emdep.vn/unsafe/450x0/quanlytin.emdep.vn/Share/Image/2021/11/14/xiu-mai-5-102553491.jpg'}
                link={'anh se la nguoi den truoc'}
                />
                <Card 
                title={'anh se la nguoi dua em den'} 
                image={'https://thumb.emdep.vn/unsafe/450x0/quanlytin.emdep.vn/Share/Image/2021/11/14/xiu-mai-5-102553491.jpg'}
                link={'anh se la nguoi den truoc'}
                />
                <Card 
                title={'anh se la nguoi dua em den'} 
                image={'https://thumb.emdep.vn/unsafe/450x0/quanlytin.emdep.vn/Share/Image/2021/11/14/xiu-mai-5-102553491.jpg'}
                link={'anh se la nguoi den truoc'}
                />
                <Card 
                title={'anh se la nguoi dua em den'} 
                image={'https://thumb.emdep.vn/unsafe/450x0/quanlytin.emdep.vn/Share/Image/2021/11/14/xiu-mai-5-102553491.jpg'}
                link={'anh se la nguoi den truoc'}
                />
                <Card 
                title={'anh se la nguoi dua em den'} 
                image={'https://thumb.emdep.vn/unsafe/450x0/quanlytin.emdep.vn/Share/Image/2021/11/14/xiu-mai-5-102553491.jpg'}
                link={'anh se la nguoi den truoc'}
                />
                <Card 
                title={'anh se la nguoi dua em den'} 
                image={'https://thumb.emdep.vn/unsafe/450x0/quanlytin.emdep.vn/Share/Image/2021/11/14/xiu-mai-5-102553491.jpg'}
                link={'anh se la nguoi den truoc'}
                />
                <Card 
                title={'anh se la nguoi dua em den'} 
                image={'https://thumb.emdep.vn/unsafe/450x0/quanlytin.emdep.vn/Share/Image/2021/11/14/xiu-mai-5-102553491.jpg'}
                link={'anh se la nguoi den truoc'}
                />
                <Card 
                title={'anh se la nguoi dua em den'} 
                image={'https://thumb.emdep.vn/unsafe/450x0/quanlytin.emdep.vn/Share/Image/2021/11/14/xiu-mai-5-102553491.jpg'}
                link={'anh se la nguoi den truoc'}
                />
            </div>
        </div>
    </div>
  )
}

export default Homepage
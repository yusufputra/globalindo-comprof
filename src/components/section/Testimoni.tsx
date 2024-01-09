import { Box, Heading, IconButton, Image, Text } from '@chakra-ui/react'
import { LayoutContainer } from '../LayoutContainer'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from 'react';
import { testimonialData } from '../../module/data';

const settings = {
    className: "center",
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const TestimoniItem = ({ isActive, ...props }: { isActive: boolean; profilePict: string; name: string; position: string; description: string }) => {
    return <Box padding={10} rounded='2xl' bg={isActive ? 'blue.900' : 'grey.100'} color={isActive ? 'white' : 'black'} textAlign='left' maxW={{ base: 'full', md: 513 }} w='full' h='auto'>
        <Box display='flex'>
            <Image src={props.profilePict} w='85px' h='85px' rounded='full' />
            <Box ml={5}>
                <Heading as='h1' fontSize='xl' fontWeight='bold' lineHeight='1'>
                    {props.name}
                </Heading>
                <Text >
                    {props.position}
                </Text>
            </Box>
        </Box>
        <Text>
            {props.description}
        </Text>
    </Box>
}

export const Testimoni = () => {
    const [page, setPage] = useState(0)
    const sliderRef = useRef<Slider>(null);
    return (
        <LayoutContainer py={20} gap={20} alignItems='flex-start'>
            <Box w='full' display='flex' justifyContent='space-between' alignItems='center'>
                <Heading as='h1' fontWeight='bold' lineHeight='1' textAlign='justify' fontSize={{ base: 'md', md: '6xl' }}>
                    What Our Client Said about us
                </Heading>
                <Box display='flex' gap={5}>
                    <IconButton aria-label='left' icon={<FaArrowLeft />} color="black.300" bg="grey.100" rounded='full' size={{ base: 'sm', md: 'lg' }} onClick={() => {
                        sliderRef.current?.slickPrev();
                    }} />
                    <IconButton aria-label='right' icon={<FaArrowRight />} color="white" bg="blue.900" rounded='full' size={{ base: 'sm', md: 'lg' }} onClick={() => {
                        sliderRef.current?.slickNext();
                    }} />
                </Box>
            </Box>
            <Box
                borderRadius="lg"
                overflow="hidden"
                w={'100%'}
            >
                <Slider {...settings} ref={sliderRef} afterChange={(e) => setPage(e)}  >
                    {testimonialData.map((item, index) => (
                        <TestimoniItem isActive={index === page} {...item} />
                    ))}
                </Slider>
            </Box>

        </LayoutContainer>
    )
}

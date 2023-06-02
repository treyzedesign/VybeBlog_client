import { Box, Center, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react';
import React from 'react'

const Blog = ({blogItem, headlines}) => {
  console.log(blogItem, headlines);

  return (
    <div>
       <Box textAlign='center'>
        <Flex minWidth='max-content' alignItems='center' gap='2' className='bloginfo' px={6} py={4}>
            <Box>
                <span > Author :</span>
                <span className='bloginfo'> {blogItem.author}</span>
            </Box>
            <Spacer/>
            <Box>
                <span className=''> Date : </span>
                <span className='bloginfo'> {new Date(blogItem.publishedAt).toLocaleString()}</span>
            </Box>
            <Spacer/>
            <Box>
                <span className=''> source :</span>
                <span className=''> {blogItem.source.name}</span>
            </Box>
            <Spacer/>
        </Flex>
        <Box mt={6}>
           <Center>
            <Heading px={40} pb={5}>{blogItem.title}</Heading>
           </Center>
            <Center>
            <Image src={blogItem.urlToImage} width='75%'/>
            </Center>
            <Center>
                <Text px={40}>{blogItem.content.slice(0)}</Text>
            </Center>
          
        </Box>
       </Box>
    </div>
  )
}

export default Blog
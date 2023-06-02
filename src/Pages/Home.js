import { Box, Heading, SimpleGrid ,Text, Button, 
    Image, Grid, GridItem, Flex, Spacer, Stack,Menu,MenuButton,MenuList,MenuItem,MenuItemOption,MenuGroup,
    MenuOptionGroup,MenuDivider, Chevr} from '@chakra-ui/react'
import React from 'react'
import banner from "../Assets/banner.jpg"
import {BiChevronDown} from 'react-icons/bi'
import dummypic from '../Assets/vybedummy.png'
import './home.css'
const Home = ({Topnews, selectPageHandler,selectPageHandlerinc,selectPageHandlerdec, AccessBlog ,sortHandler, pageNum}) => {

  return (
    <div>
        <Box height='100vh' >
            <SimpleGrid columns={2} spacing={2}>
                <Box  px={10} pt="20vh">
                    <Heading>
                        <Text fontSize='8xl'>
                            <span className='i-sname'>VYBE</span>
                            <span>BLOG.</span> 
                        </Text>
                        <Text fontSize="2xl" pt={6}>
                            Discover stories, thinking, and expertise from writers on any topic.
                        </Text>
                    </Heading>
                    <Button colorScheme={'blackAlpha'} px={10} mt={25} borderRadius={20}>
                        get Started
                    </Button>
                </Box>
                <Box>
                    <Image height='100vh' width='100%' src={banner}/>
                </Box>
            </SimpleGrid>
        </Box>
        <Box>
        <Grid
            h='100vh'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
            mt={4}
            >
            <GridItem rowSpan={4} colSpan={3}>
                <Box p={18}>
                    <Flex>
                        <Text as='u' fontSize={25}> Recent Articles</Text>
                        <Spacer/>
                        <Box>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<BiChevronDown/>}>
                                Categories
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={()=> sortHandler('relavancy')}>relevancy</MenuItem>
                                <MenuItem onClick={()=> sortHandler('publishedAt')}>published At</MenuItem>
                                <MenuItem onClick={()=> sortHandler('popularity')}>popularity</MenuItem>
                              
                            </MenuList>
                            </Menu>
                        </Box>
                    </Flex> 
                    {
                            Topnews.map((item,index)=>{
                                return(
                                    <Box my="6">   
                                    <Flex>
                                    <Image
                                            width="30%"
                                            height="30vh"
                                            src={item.urlToImage ? item.urlToImage : dummypic}
                                            alt={item.title}
                                        />

                                        <Stack pl='2'>
                                        
                                            <Heading size='md'>{item.title}</Heading>

                                            <Text pt='2'>
                                               {item.description}
                                            </Text>
                                            
                                            <Button variant='solid' colorScheme='blue' width='20%' onClick={()=> AccessBlog(item)}>
                                                read more..
                                            </Button>

                                            <small >published: {new Date(item.publishedAt).toLocaleString()}</small>
                                        
                                        </Stack>
                                    </Flex>
                                       
                                    </Box>
                                )
                            })
                        }                   
                </Box>
                <Box>
                <div>
                    {Topnews.length > 0 && <nav aria-label="Page navigation example mb-3">
                      <ul class="pagination justify-content-center my-3 mb">
                        <li class="page-item">
                          <span class="page-link" onClick={()=> selectPageHandlerdec()}>⏪</span>
                        </li>
                        {
                          [...Array(Math.ceil(Topnews.length/10))].map((_, i)=>{
                                return <li className='page-item'><a key={i} className='page-link' onClick={()=> selectPageHandler(i)}>{i + 1}</a></li>
                                // return i
                          })
                        }
                        <li class="page-item">
                          <span class="page-link" onClick={()=> selectPageHandlerinc(pageNum + 1)}>⏩</span>
                        </li>
                      </ul>
                  </nav>
                }
           </div>
                </Box>
            </GridItem>
            <GridItem colSpan={2}  />
           
        </Grid>
        </Box>
    </div>
  )
}

export default Home
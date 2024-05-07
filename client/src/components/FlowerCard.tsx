import { Card, Text, Image, Stack, Heading, Button, CardBody, CardFooter } from '@chakra-ui/react';

const FlowerCard = () => {
  return (
    <div>
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Flower'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>Living room Sofa</Heading>
                <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design with a
                    sprinkle of vintage design.
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    $450
                </Text>
                </Stack>
            </CardBody>
            <CardFooter>
                <Button variant='solid' colorScheme='blue'>
                    Buy now
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}

export default FlowerCard
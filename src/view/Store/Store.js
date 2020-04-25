import React, { useState } from 'react';
import { Box, Heading, Text, Button } from 'grommet'
import { Money } from 'grommet-icons'
import {useFetch} from '../../data/util/hooks'
import Subscribe from './subscribe'
const Store = () => {
    const [subscribe, setSubscribe] = useState('');
    const [data, { loading, setStart }]=useFetch('https://data.seosemapi.com:35566/stripe/plans');

    const onSubscribe = (item)=>{
        setSubscribe(item)
    }
    React.useEffect(() => {
        setStart(true)
        return () => {
            setStart(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
console.log(subscribe)

if(subscribe){
    return (
        <Subscribe item={subscribe} />
    )
} else return (
          <Box align="center" justify="center" pad="small" fill="vertical" direction="row" gap="xsmall">
            {
                data[0] && data[0].map(item=>{
                    return(
                        <Box key={item.id} align="center" justify="center" pad={{"horizontal":"xlarge","vertical":"large"}} background={{"color":"accent-1","opacity":"strong"}} round="medium" gap="medium">
              <Box align="center" justify="between" direction="row" flex={false}>
                <Heading size="small" >{item.name}</Heading>
              </Box>
              <Heading >$ {item.amount/100}/{item.interval}</Heading>
              <Box>
                <Box align="center" justify="between" pad={{"horizontal":"medium","vertical":"small"}} direction="row">
                  <Text>
                    detail
                  </Text>
                </Box>          
                <Box align="center" justify="between" pad={{"horizontal":"medium","vertical":"small"}} direction="row">
                  <Text>
                    detail
                  </Text>
                </Box>          
                <Box align="center" justify="between" pad={{"horizontal":"medium","vertical":"small"}} direction="row">
                  <Text>
                    detail
                  </Text>
                </Box>          
                <Box align="center" justify="between" pad={{"horizontal":"medium","vertical":"small"}} direction="row">
                  <Text>
                    detail
                  </Text>
                </Box>         
                 <Box align="center" justify="between" pad={{"horizontal":"medium","vertical":"small"}} direction="row">
                  <Text>
                    detail
                  </Text>
                </Box>
              </Box>
              <Button label="Subscribe" fill="horizontal" icon={<Money />} onClick={()=>onSubscribe(item)}/>
            </Box>
                    )
                })
            }
          </Box>
        )
};

export default Store;
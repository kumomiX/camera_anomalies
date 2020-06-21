import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { List, CircularProgress, Typography } from '@material-ui/core'
import Template from './Template'
import { fetchTemplates } from './templatesSlice'
import Flex from 'components/Flex'

const styles = {
  innerDiv: { margin: 'var(--spacing-s)', overlow: 'hidden' },
}

const mockTemplates = [
  {
    uuid: 12313,
    is_online: false,
    is_active: false,
    stream_url: 'http://idi.nahui',
    thumb: undefined,
    ip: '192.168.0.1',
  },
]

export default function TemplatesList() {
  const dispatch = useDispatch()

  const { list: templates, loading, loadingListError } = useSelector(
    ({ templates }) => templates,
  )

  useEffect(() => {
    dispatch(fetchTemplates({}))
  }, [dispatch])

  return (
    <List style={{ width: '100%' }}>
      {templates?.map((t) => (
        <Template key={t.uuid} {...t} />
      ))}
      {/* {loading ? (
        <Flex component="li" style={styles.innerDiv}>
          <CircularProgress />
        </Flex>
      ) : !templates ? (
        <Flex
          flexDirection="column"
          alignItems="center"
          style={{
            ...styles.innerDiv,
            backgroundColor: 'var(--color-subtle-background)',
            padding: 'var(--spacing-s)',
            borderRadius: 'var(--br-m)',
          }}
          component="li"
        >
          <span style={{ fontSize: 32 }} role="img" aria-label="dead">
            😵
          </span>
          <Typography align="center" color="error">
            При загрузке списка камер произошла ошибка
          </Typography>
        </Flex>
      ) : (
        // TODO change key
        templates?.map((c) => <Template key={c.uuid} {...c} />)
      )} */}
    </List>
  )
}

export default async ({ __deps__, __imports__ }) => {
  const { Box, Button, Stack } = __imports__.grommet
  const { React, lodash: _, icons, CodeEditor } = __imports__.utils
  const { napi, iconSize } = __deps__

  const _view = ({ size, mode }) => ({ node }) => {
    const [flipped, setFlipped] = React.useState()
    const activeSide = flipped ? 'back' : 'front'
    const value = _.get(node, `sides.flashcard.${activeSide}.content`)
    const background = _.get(node, 'sides.flashcard.background', { color: 'black', opacity: 'strong' })
    return (
      <Box fill align='center' justify='center' pad='small'>
        <Box fill align='center' justify='center' round='small' background={background} overflow='scroll'>
          {mode === 'view' && <Box pad='small' fill='horizontal'><Button plain icon={<icons.Refresh color='control' />} label={activeSide} onClick={() => setFlipped(!flipped)} /></Box>}
          <Box fill align='center' justify='center' pad='small' overflow='scroll'>
            <CodeEditor key={activeSide} value={value} onChange={newValue => napi.updateNodeSide(node, `flashcard/${activeSide}`, { content: newValue })} options={{ size, language: null }} />
          </Box>
        </Box>
      </Box>
    )
  }

  const icon = ({ node }) => (
    <Box fill align='center' justify='center'>
      <Stack>
        <Box fill align='center' justify='center'><icons.Note size={iconSize} /></Box>
        <Box fill align='center' justify='center'><icons.Refresh size='small' /></Box>
      </Stack>
    </Box>
  )
  const preview = _view({ size: 'small', mode: 'preview' })
  const view = _view({ size: 'medium', mode: 'view' })
  const edit = view

  return {
    modes: {
      icon,
      preview,
      view,
      edit
    }
  }
}

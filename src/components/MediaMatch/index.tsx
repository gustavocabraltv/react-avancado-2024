import { MediaMatchContainer, MediaMatchProps } from './styles'

const MediaMatch: React.FC<MediaMatchProps> = ({
  lessThan,
  greaterThan,
  children
}) => (
  <MediaMatchContainer lessThan={lessThan} greaterThan={greaterThan}>
    {children}
  </MediaMatchContainer>
)

export default MediaMatch

import { clamp, distance } from '@popmotion/popcorn'

// Prevent rapid reverse swapping
const buffer = 5

export const findIndex = (idx, yOffset, positions) => {
  let target = idx
  const { top, height } = positions[idx]
  const bottom = top + height

  // If moving down
  if (yOffset > 0) {
    const nextItem = positions[idx + 1]
    if (nextItem === undefined) return idx

    const swapOffset =
      distance(bottom, nextItem.top + nextItem.height / 2) + buffer
    if (yOffset > swapOffset) target = idx + 1

    // If moving up
  } else if (yOffset < 0) {
    const prevItem = positions[idx - 1]
    if (prevItem === undefined) return idx

    const prevBottom = prevItem.top + prevItem.height
    const swapOffset = distance(top, prevBottom - prevItem.height / 2) + buffer
    if (yOffset < -swapOffset) target = idx - 1
  }

  return clamp(0, positions.length, target)
}

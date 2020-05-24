import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  --slider-height: 25px;
  --slider-width: calc(var(--slider-height) * 1.6);

  position: relative;
  display: inline-block;
  height: var(--slider-height);
  width: var(--slider-width);

  /* Hide default HTML checkbox */
  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`

const Slider = styled.span`
  --offset: 2px;
  --size: calc(var(--slider-height) - var(--offset) * 2);

  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &::before {
    position: absolute;
    content: '';
    height: var(--size);
    width: var(--size);
    left: var(--offset);
    bottom: var(--offset);
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + & {
    background-color: var(--color-primary);
  }

  input:focus + & {
    box-shadow: 0 0 1px var(--color-primary);
  }

  input:checked + &::before {
    /* transform: translateX(calc(var(--size) - var(--offset))); */
    transform: translateX(calc(var(--size) - var(--offset) * 3));
  }

  border-radius: var(--slider-height);

  &::before {
    border-radius: 50%;
  }
`

export default function Switch({ checked, ...props }) {
  return (
    <Label>
      <input type="checkbox" checked={checked} />
      <Slider />
    </Label>
  )
}

import { useState, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { HiCheckCircle } from 'react-icons/hi'
import { BiCopy } from 'react-icons/bi'

export default function Copy({ value, title, size = 16, onCopy, className = '' }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const timeout = copied ? setTimeout(() => setCopied(false), 1 * 1000) : null
    return () => clearTimeout(timeout)
  }, [copied, setCopied])

  return copied ?
    <div className={`${title ? 'min-w-max' : ''} flex items-center space-x-1`}>
      {title && (
        <span className="font-medium">
          {title}
        </span>
      )}
      <HiCheckCircle size={size} className={className || 'text-green-300 dark:text-green-500'} />
    </div>
    :
    <CopyToClipboard
      text={value}
      onCopy={() => {
        setCopied(true)
        if (onCopy) {
          onCopy()
        }
      }}
    >
      <div className={`${title ? 'min-w-max' : ''} flex items-center space-x-1`}>
        {title && (
          <span className="font-medium">
            {title}
          </span>
        )}
        <BiCopy size={size} className={className || 'cursor-pointer text-slate-300 hover:text-slate-400 dark:text-slate-700 dark:hover:text-slate-600'} />
      </div>
    </CopyToClipboard>
}
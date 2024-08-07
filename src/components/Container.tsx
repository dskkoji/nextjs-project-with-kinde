type Props = {
  children: React.ReactNode
}

export default function Container({ children }: Props) {
  return (
    <div className="max-w-[1100px] mx-auto bg-white min-h-screen flex flex-col border-l border-r">
      {children}
    </div>
  )
}
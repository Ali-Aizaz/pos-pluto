import classNames from 'classnames'
import { Cross } from 'components'

const Modal = ({ title = '', children, showModal, transparent, onClose }) =>
  showModal && (
    <div className="absolute -translate-y-10 left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/40 backdrop-blur dark:bg-navy/80">
      {onClose ? (
        <div className="absolute z-0 h-full w-full" onClick={onClose} />
      ) : null}
      <div
        className={classNames(
          { 'bg-transparent': transparent, 'bg-white': !transparent },
          'z-[1] h-fit max-h-[654px] min-w-[400px] max-w-[500px] rounded-[20px] dark:bg-gray-dark'
        )}
      >
        <div className="flex h-full w-full flex-col p-5">
          {title && (
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-medium text-black/90 dark:text-white/90">
                {title}
              </h2>
              {onClose ? (
                <div
                  className="flex transform cursor-pointer overflow-hidden rounded-full p-2 text-black/90 duration-300 hover:bg-black/5"
                  onClick={onClose}
                >
                  <Cross />
                </div>
              ) : null}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  )

export default Modal

import { FC } from 'react'

const Accordion: FC = () => (
  <div
    style={{
      boxSizing: 'border-box',
      width: '800px',
      height: '243px',
      border: '1px solid rgba(3, 17, 27, 0.4)',
      margin: '50px 0px 30px 113px',
      background: '#FFFFFF',
      color: 'black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      borderRadius: '10px',
    }}
  >
    <div
      className="flex justify-between black-border"
      style={{
        borderBottom: '1px solid black',
        fontSize: '22px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        height: '63px',
        padding: '0px 0px 0px 30px',
      }}
    >
      <div>Frequently Asked Questions</div>
    </div>
    <div
      className="flex justify-between black-border"
      style={{
        borderBottom: '1px solid black',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        height: '63px',
        padding: '0px 0px 0px 30px',
      }}
    >
      <div>Will you be adding more templates later?</div>
      <button type="button" className="mr-4">
        ▼
      </button>
    </div>
    <div
      className="flex justify-between black-border"
      style={{
        borderBottom: '1px solid black',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        height: '63px',
        padding: '0px 0px 0px 30px',
      }}
    >
      <div>Can I create custom report from scratch?</div>
      <button type="button" className="mr-4">
        ▼
      </button>
    </div>
    <div
      className="flex justify-between black-border"
      style={{
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        height: '63px',
        padding: '0px 0px 0px 30px',
      }}
    >
      <div>How to remove your “Form created using Forms Ocean” tag?</div>
      <button type="button" className="mr-4">
        ▼
      </button>
    </div>
  </div>
)

export default Accordion

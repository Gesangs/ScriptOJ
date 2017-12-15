// 完成一个生成计数器的函数 plusFor，调用它会返回一个计数器。计数器本身也是一个函数，每次调用会返回一个字符串。
// 闭包

const plusFor = (name) => /* TODO */ {
    let count = 1;
    return () => {
      return `为${name}+${count++}s`
    }
  }


// 肥猫列表，按体重从小到大的顺序渲染列表

const cats = [
    { name: 'Tom', weight: 300 },
    { name: 'Lucy', weight: 400 },
    { name: 'Lily', weight: 700 },
    { name: 'Jerry', weight: 600 },
  ]

  function renderFatCats (cats) {
    cats.sort((a, b) => a.weigth < b.weight ? 1 : -1)
    
    const CAT = props => <div className>
      <div className='cat'>
        <span className='cat-name'>props.cat.name</span>
        <span className='cat-weight'>props.cat.weight</span>
      </div>
    </div>
    
    const CATLIST = props => <div className='cats-list'>{props.cats.map((item) => <CAT cat={item} />)}</div>
    ReactDom.render(<CATLIST cats={cats} />, document.getElementById('app'))
  }
  
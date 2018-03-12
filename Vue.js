function defineReacttive (obj, key, val) {
    const dep = new Dep();

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            if(Dep.target) {
                dep.depend()
            }
            return val;
        },
        set: function(newVal) {
            if(newVal === val || (newVal !== newVal && val !== val )) {
                return;
            }
            val = newVal;
            dep.notify()
        } 
    });
}

class Dep {
    constructor(){
        this.list = [];
    }

    addSub(sub){
        this.list.push(sub)
    }

    removeSub(sub){
        remove(this,list, sub)
    }

    depend(){
        if(Dep.target){
            Dep.target.addDep(this)
            // 等同于 this.addSub(Dep.target)
        }
    }

    notify(){
        const subs = this.list.slice();
        for(let i = 0, l = subs.length; i < l; i++){
            subs[i].update()
        }
    }
}


const data = {};

const watcher = {
    addDep:function(dep) {
        dep.addSub(this);
    },
    update:function(){
        html();
    }
}

function html(){
    document.querySelector('body').innerHTML = data.html;
}

defineReacttive(data, "html", "how are you");

Dep.target = watcher;

html();

Dep.target = null;
const fi = (function () {
    return {
        method: function () {
            return 'hello'
        },

        each: function (collection, callback) {
            for (let key in collection) {
                callback(collection[`${key}`], key, collection)
            }
            return collection
        },

        map: function (collection, callback) {
            let newCollection = []
            for (let key in collection) {
                newCollection.push(callback(collection[`${key}`], key, collection))
            }
            return newCollection
        },

        reduce: function (collection, callback, a) {
            let i;
            if (!a) {
                a = collection[0]
                i = 1;
            } else {
                i = 0;
            }
            for (i; i < collection.length; i++) {
                a= callback(acc, collection[i], collection)
            }
            return a
        },

        find: function (collection, predicate) {
            let result = undefined;
            for (let i = 0; i < collection.length; i++) {
                if (predicate(collection[i])) {
                    result = collection[i];
                    break
                }
            }
            return result
        },

        filter: function (collection, predicate) {
            let result = [];
            for (let i = 0; i < collection.length; i++) {
                if (predicate(collection[i])) {
                    result.push(collection[i])
                }
            }
            return result
        },

        size: function (collection) {
            let counter = 0;
            for (let item in collection) {
                counter++
            }
            return counter
        },

        first: function (array, n) {
            if (!n) {
                return array[0]
            }
            let result = []
            for (let i = 0; i < n; i++) {
                result.push(array[i])
            }
            return result
        },

        last: function (array, n) {
            if (!n) {
                return array[array.length - 1]
            }
            n = array.length - n
            let result = []
            for (let i = n; i < array.length; i++) {
                result.push(array[i])
            }
            return result
        },

        compact: function (array) {
            let result = []
            for (let i = 0; i < array.length; i++) {
                if (array[i]) {
                    result.push(array[i])
                }
            }
            return result
        },

        sortBy: function (array, callback) {
            let newArr = [...array]
            function compare(a, b) {
                return callback(a) - callback(b)
            }
            return newArr.sort(compare)
        },

        flatten: function (array, shallow, result = []) {
          for (let element of array){
            isItArray(element)
          }
          return result

          function isItArray(element) {
            if (!Array.isArray(element)) {
              result.push(element)
              return
            }
            else {
              for (let elementInside of element){
                shallow ? result.push(elementInside) : isItArray(elementInside)
              }
              return
            }
          }
        },

        uniq: function (array, isSorted, callback, result = []) {
            let values = []
            for (let element of array) {
              if (callback) {
                if (!values.includes(callback(element))) {
                    values.push(callback(element));
                    result.push(element);
                }
              } else {
                if (!result.includes(element)) {
                    result.push(element);
                }
              }
            }
            return result
        },

        keys: function (object) {
            let result = []
            for (let key in object) {
                result.push(key)
            }
            return result
        },

        values: function (object) {
            let result = []
            for (let key in object) {
                result.push(object[key])
            }
            return result
        },

        functions: function (object) {
            let result = []
            for (let key in object) {
                if (typeof (object[key]) === 'function') {
                    result.push(key)
                }
            }
            return result.sort()
        },

    }
})()

fi.libraryMethod()
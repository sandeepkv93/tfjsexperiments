function updateProgress(percentage) {
    if (percentage > 100) percentage = 100;
    $('#progressBar').css('width', percentage + '%');
    $('#progressBar').html(percentage + '%');
}

var quadratic = function () {
    const a = tf.variable(tf.scalar(Math.random()));
    const b = tf.variable(tf.scalar(Math.random()));
    const c = tf.variable(tf.scalar(Math.random()));
    const learningRate = document.getElementById('myText02').value // 0.01;
    const optimizer = tf.train.sgd(learningRate);

    function predict(input) {
        // y = a * x ^ 2 + b * x + c
        return tf.tidy(() => {
            const x = tf.scalar(input);
            const ax2 = a.mul(x.square());
            const bx = b.mul(x);
            const y = ax2.add(bx).add(c);
            return y;
        });
    }

    function loss(prediction, actual) {
        const error = tf.scalar(actual).sub(prediction).square();
        return error.asScalar();
    }
    async function train(xs, ys, numIterations, done) {
        for (let iter = 0; iter < numIterations; iter++) {
            for (let i = 0; i < xs.length; i++) {
                optimizer.minimize(() => {
                    const pred = predict(xs[i]);
                    const predLoss = loss(pred, ys[i]);
                    if (i == 0) {
                        document.getElementById('myDiv124').innerHTML += 'Batch #' + iter + ' LOSS = ' + predLoss + '<br>'
                        updateProgress((iter+1)*(100/numIterations));
                    }
                    return predLoss;
                });
            }
            await tf.nextFrame();
        }
        done();
    }

    function test(xs, ys) {
        tf.tidy(() => {
            const predictedYs = xs.map(predict);
            if (ys != 0) {
                document.getElementById('myDiv124').innerHTML += 'Expected ' + ys + '<br>';
            }
            document.getElementById('myDiv124').innerHTML += 'Got ' + predictedYs.map(
                (p) => parseFloat(p.dataSync()[0]).toFixed(3)) + '<br><br>';
        })
    }
    const data = {
        xs: [document.getElementById('myX0').value, document.getElementById('myX1').value, document.getElementById('myX2').value, document.getElementById('myX3').value],
        ys: [document.getElementById('myY0').value, document.getElementById('myY1').value, document.getElementById('myY2').value, document.getElementById('myY3').value]
    };
    document.getElementById('myDiv124').innerHTML = 'Before training: using random coefficients <br>'

    test(data.xs, data.ys);
    train(data.xs, data.ys, document.getElementById('myText01').value, () => {
        document.getElementById('myDiv124').innerHTML += '<br>After Training a = ' + parseFloat(a.dataSync()).toFixed(3) +
            ' b = ' + parseFloat(b.dataSync()).toFixed(3) + ' c = ' + parseFloat(c.dataSync()).toFixed(3) + '<br><br>'

        test(data.xs, data.ys);
        document.getElementById('myDiv124').innerHTML += 'So the final equation is <b>Y = ' + parseFloat(a.dataSync()).toFixed(3) +
            '*X^2 + ' + parseFloat(b.dataSync()).toFixed(3) + '*X + ' + parseFloat(c.dataSync()).toFixed(3) + '</b><br><br>'
        document.getElementById('myDiv124').innerHTML += 'Trying for x the value <b>' + document.getElementById('myText14').value + '</b><br>'
        const data2 = {
            xs: [document.getElementById('myText14').value],
            ys: [0]
        };
        test(data2.xs, data2.ys);

    });
}
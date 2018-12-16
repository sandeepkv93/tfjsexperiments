class myTensor extends tf.Tensor {
    constructor(a, b) {
        const myTempTensor = tf.tensor(a, b)

        myTempTensor.myInverse2DSquare = function (b) {
            const myInverseMultiplier = 1 / ((b.dataSync()[0] * b.dataSync()[3]) - (b.dataSync()[1] * b.dataSync()[2]))
            const myMatrixConverted = tf.tensor2d([b.dataSync()[3] * myInverseMultiplier, b.dataSync()[1] * -1 * myInverseMultiplier, b.dataSync()[2] * -1 * myInverseMultiplier, b.dataSync()[0] * myInverseMultiplier], [2, 2])

            return myMatrixConverted
            myInverseMultiplier.dispose()
            myMatrixConverted.dispose()
        }
        return myTempTensor;
    }
}

var matrix_inverse = function () {
    var myOwnTensor = new myTensor()
    var childbus = parseFloat($('#childbus').val());
    var childtrain = parseFloat($('#childtrain').val());
    var adultbus = parseFloat($('#adultbus').val());
    var adulttrain = parseFloat($('#adulttrain').val());
    var totalbus = parseFloat($('#totalbus').val());
    var totaltrain = parseFloat($('#totaltrain').val());
    var myMatrixOriginal = tf.tensor2d([childbus, childtrain, adultbus, adulttrain], [2, 2]);
    var myVector1D = tf.tensor1d([totalbus, totaltrain]);

    var myResult1 = myOwnTensor.myInverse2DSquare(myMatrixOriginal)
    //document.getElementById('matrix-inverse-result').innerHTML = 'Intermediate Inverse Matrix shape = ' + myResult1.shape + '<br>Intermediate Values = ' + myResult1.dataSync() + '<br>'

    var myResult2 = tf.vectorTimesMatrix(myVector1D, myResult1);
    document.getElementById('matrix-inverse-result').innerHTML = '<b>Children</b> = ' + Math.round(myResult2.dataSync()[0]) + ',  <b>Adults</b> = ' + Math.round(myResult2.dataSync()[1])
}
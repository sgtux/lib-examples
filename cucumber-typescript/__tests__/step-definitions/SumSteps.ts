import { binding, given, when, then } from 'cucumber-tsflow'
import { expect } from 'chai'
import supertest from 'supertest'
import server from '../../src/server'

const httpClient = supertest(server)

@binding()
class SumSteps {
    private num1 = 0;
    private num2 = 0;

    @given(/I enter (\d*)/)
    public givenFirstNumber(num: string): void {
        this.num1 = parseInt(num)
    }

    @when(/I add number (\d*)/)
    public whenAddNumber(num2: string): void {
        this.num2 = parseInt(num2)
    }

    @then(/I receive the result (\d*)/)
    public thenResultReceived(expected: string): void {
        httpClient.get(`/sum?num1=${this.num1}&num2=${this.num2}`)
            .expect(200)
            .end((err, res) => {
                if (err) throw err
                expect(res.body.result).to.be.equal(parseInt(expected))
            })
    }
}
export = SumSteps
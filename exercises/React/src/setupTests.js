import '@testing-library/jest-dom'
import { mockServer } from './mockServer'

beforeAll(() => mockServer.listen())
afterAll(() => mockServer.close())

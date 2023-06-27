import {
    Badge,
    Table,
    Card,
    Button,
    CardHeader,
    CardFooter,
    CardBody
} from "reactstrap";

const Book = ({ data, onPrevious }) => {
    return (
        <>
            <Card className="shadow">
                <CardHeader className="border-0">
                    <h3 className="mb-0">booking details</h3>
                </CardHeader>
                <CardBody>
                    <Table className="align-items-center table-flush" responsive>
                        <tbody>
                            <tr>
                                <td>
                                    <i className="bg-primary" />
                                    <span className="mb-0 text-md">
                                        FIRST NAME
                                    </span>
                                </td>
                                <td>
                                    <Badge color="" className="badge-dot mr-4">
                                        <i className="bg-info" />
                                        {data.firstname}
                                    </Badge>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="mb-0 text-sm">
                                        Last name
                                    </span>
                                </td>
                                <td>
                                    <Badge color="" className="badge-dot mr-4">
                                        <i className="bg-info" />
                                        {data.lastname}
                                    </Badge>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="mb-0 text-sm">
                                        NATIONAL IDENTITY
                                    </span>
                                </td>
                                <td>
                                    <Badge color="" className="badge-dot mr-4">
                                        <i className="bg-info" />
                                        {data.nID}
                                    </Badge>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="mb-0 text-sm">
                                        FEES
                                    </span>
                                </td>
                                <td>
                                    <Badge color="" className="badge-dot mr-4">
                                        <i className="bg-info" />
                                        3000 RWF
                                    </Badge>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <span className="mb-0 text-sm">
                                        ARRIVAL TIME
                                    </span>
                                </td>
                                <td>
                                    <Badge color="" className="badge-dot mr-4">
                                        <i className="bg-info" />
                                        {Date.now()}
                                    </Badge>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </CardBody>
                <CardFooter>
                <Button
                            color="success"
                            onClick={(e) => e.preventDefault}
                            style={{width:'500px'}}
                          >
                            Book visit
                          </Button>
                </CardFooter>
            </Card>

        </>
    )
}

export default Book;